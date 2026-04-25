public class CaesarCipher {

    public static String encrypt(String text, int shift) {
        return transform(text, shift);
    }

    public static String decrypt(String text, int shift) {
        return transform(text, -shift);
    }

    private static String transform(String text, int shift) {

        StringBuilder result = new StringBuilder();

        for (char c : text.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';

                int newChar = (c - base + shift) % 26;
                if (newChar < 0) newChar += 26;

                result.append((char) (base + newChar));
            } else {
                result.append(c);
            }
        }

        return result.toString();
    }
}