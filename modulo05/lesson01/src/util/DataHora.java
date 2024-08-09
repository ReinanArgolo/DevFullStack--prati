package util;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class DataHora {
    public static void main(String[] args) {

        LocalDate hoje = LocalDate.now();
        System.out.println(hoje);

        LocalDate parsedDate = LocalDate.parse("dd-MM-yyyy");
    }
}
