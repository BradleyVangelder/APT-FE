package fact.it.demo.controller;

import fact.it.demo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;
import java.util.List;

@Controller
public class MainController {

    @Value("${edgeservice.baseurl}")
    private String edgeservicebaseurl;

    @RequestMapping("/")
    public String test(Model model) throws IOException {
        model.addAttribute("name", "Bradley Vangelder");
        return "test";
    }
}
