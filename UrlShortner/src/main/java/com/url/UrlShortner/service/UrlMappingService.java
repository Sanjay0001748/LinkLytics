package com.url.UrlShortner.service;

import com.url.UrlShortner.Model.UrlMapping;
import com.url.UrlShortner.Model.User;
import com.url.UrlShortner.Repository.UrlMappingRepository;
import com.url.UrlShortner.dtos.UrlMappingDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UrlMappingService {

    public UrlMappingService(UrlMappingRepository urlMappingRepository) {
        this.urlMappingRepository = urlMappingRepository;

    }

    private UrlMappingRepository urlMappingRepository;


    public UrlMappingDto createShortUrl(String originalUrl, User user) {
        String shortUrl = generateShortUrl();
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        UrlMapping savedUrlMapping = urlMappingRepository.save(urlMapping);
        return convertToDto(savedUrlMapping);
    }
   private UrlMappingDto convertToDto(UrlMapping urlMapping) {
        UrlMappingDto urlMappingDTO=new UrlMappingDto();


       urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
    }

    private String generateShortUrl() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        Random random=new Random();
        StringBuilder shortUrl = new StringBuilder(8);

        for (int i = 0; i < 8; i++) {
            shortUrl.append(characters.charAt(random.nextInt(characters.length())));
        }
        return shortUrl.toString();
    }


    public List<UrlMappingDto> getUrlsByUser(User user) {
        return urlMappingRepository.findByUser(user).stream()
                .map(this::convertToDto)
                .toList();
    }


        public UrlMapping getOriginalUrl(String shortUrl) {

            UrlMapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
            if (urlMapping != null) {
                urlMappingRepository.save(urlMapping);
            }

                return urlMapping;
        }

}


