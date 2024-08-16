package com.examen.appcrud.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class WebController {
    @RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect(){
        return "forward:/";
    }
}
