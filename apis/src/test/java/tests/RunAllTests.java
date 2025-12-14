package tests;

import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.AfterAll;
import java.awt.Desktop;
import java.io.File;

class RunAllTests {

    @Karate.Test
    Karate testAll() {
        return Karate.run("classpath:features").relativeTo(getClass());
    }

    @AfterAll
    static void openReport() throws Exception {
        File htmlReport = new File("target/karate-reports/karate-summary.html");
        if(htmlReport.exists()) {
            Desktop.getDesktop().browse(htmlReport.toURI());
        } else {
            System.out.println("Reporte no encontrado: " + htmlReport.getAbsolutePath());
        }
    }
}
