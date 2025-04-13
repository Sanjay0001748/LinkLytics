package com.url.UrlShortner.controller;

import com.url.UrlShortner.Model.User;
import com.url.UrlShortner.dtos.UrlMappingDto;
import com.url.UrlShortner.service.UrlMappingService;
import com.url.UrlShortner.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "https://projectex.xyz")
@RestController
@RequestMapping("/api/urls")
public class UrlMappingController {

    private UrlMappingService urlMappingService;
    private UserService userService;

    public UrlMappingController(UrlMappingService urlMappingService, UserService userService) {
        this.urlMappingService = urlMappingService;
        this.userService = userService;
    }
// {"originalUrl":"https://example.com"}
//    https://abc.com/QN7XOa0a --> https://example.com


    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingDto> createShortUrl(@RequestBody Map<String, String> request,


                                                                      Principal principal){
        String originalUrl = request.get("originalUrl");
        User user = userService.findByUsername(principal.getName());
        UrlMappingDto urlMappingdto= urlMappingService.createShortUrl(originalUrl, user);
        return ResponseEntity.ok(urlMappingdto);
    }
    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDto>> getUserUrls(Principal principal){
        User user = userService.findByUsername(principal.getName());
        List<UrlMappingDto> urls = urlMappingService.getUrlsByUser(user);
        return ResponseEntity.ok(urls);
    }

}
