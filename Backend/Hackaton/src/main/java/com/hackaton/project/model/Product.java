package com.hackaton.project.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Document(collection = "products")
public class Product {

    @Transient
    public static final String sequenceName = "product_sequence";

    @Id
    int id;
    int productId;
    String productName;
    String productDetails;
    String category;
    String availability;
    int quantity;
}
