package com.url.UrlShortner.Repository;

import com.url.UrlShortner.Model.UrlMapping;
import com.url.UrlShortner.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping,Long> {
    UrlMapping findByShortUrl(String shortUrl);
    List<UrlMapping> findByUser(User user);


}
