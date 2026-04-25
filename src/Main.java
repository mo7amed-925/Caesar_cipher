import javafx.application.Application;
import javafx.concurrent.Worker;
import javafx.scene.Scene;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;

import java.awt.Desktop;
import java.net.URI;

public class Main extends Application {

    @Override
    public void start(Stage stage) {

        System.setProperty("prism.order", "sw");

        WebView webView = new WebView();

        // تحميل الصفحة بدون cache
        String url = getClass().getResource("/resources/index.html").toExternalForm();
        webView.getEngine().load(null);
        webView.getEngine().load(url + "?v=" + System.nanoTime());

        // 🔥 أهم جزء: أي لينك يتحول ل browser خارجي
        webView.getEngine().locationProperty().addListener((obs, oldLoc, newLoc) -> {

            if (newLoc.startsWith("http")) {
                try {
                    Desktop.getDesktop().browse(new URI(newLoc));
                } catch (Exception e) {
                    e.printStackTrace();
                }

                // رجوع للتطبيق بدل ما يفتح جوه
                webView.getEngine().load(oldLoc);
            }
        });

        stage.setTitle("Caesar Cipher");
        stage.setScene(new Scene(webView, 900, 600));
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}