package com.ixcamper.backend.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MainController {

  @GetMapping("/welcome")
  public Map<String, String> welcome() {
    Map<String, String> res = new HashMap<>();
    res.put("message", "Hello World! MonoRepo");
    return res;
  }
}
