package com.otel.spike.bakcend.otelbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NumberController {

    @GetMapping("/increment")
    @ResponseBody
    public String getIncerementOf(@RequestParam int number){
        
        int incremement = number + 1;

        return Integer.toString(incremement);
    }
}
