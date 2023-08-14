## FINAL PROJECT

Description : This project was made to fulfill the Midterm Project Fullstack Engineer Track assignment from the GIGIH 3.0 program

## Table Of Content
* [Database Structure](#database-structure)
* [API Structure](#api-structure)
    * [Product API](#1-product-api)
    * [Video API](#2-video-api)
    * [Comment API](#3-comment-api)
* [API Request Response List](#api-request-response-list)
* [How To Run](#how-to-run-in-local)
    * [Set Up The Project](#1-set-up-the-project)
    * [Set Up The Database](#2-set-up-the-database)
    * [Run The Project](#3-run-the-project)

## Database Structure
The architectural database used in this project is `MongoDB`, this project have 3 Collections, video, comment, and product.

### Video Collection
```
{
  title: String
  thumbnailUrl: String
  youtubeUrl: String
  productId: String
  comments: String
},
```

### Comment Collection
```
{
  name: String
  comment: String
  createdAt: Date
  videoId: String
}
```
### Product Collection
```
 {
  title: String
  price: Number
  link: String
}
```

## API Structure
The API in this project runs on a local server `http://localhost:3000/api`.

### 1. Product API

```
API                | Controller Function

GET: /product      | `controller.getAllProducts`
POST: /product     | `controller.addProduct`
```
### 2. Video API

```
API                | Controller Function

GET: /videos       | `controller.getAllVideos`
GET: /videos/:id   | `controller.getVideoById`
POST: /videos      | `controller.addVideo`
```
### 3. Comment API

```
API                             | Controller Function

GET: /videos/:videoId/comments  | `controller.getCommentsByVideoId`
POST: /videos/:videoId/comments | `controller.addComment`
```
## API Request Response List

### GET: /product

----
Return all videos from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
          _id,
          title,
          price,
          link,
        }
    ]
  }
  ```

### POST: /product

----
Creates a new Product and returns the new object.

* **URL Params**  
  None
* **Data Params**  
  ```
  title: String
  price: Number
  link: String
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            productId
            title
            price
            link
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
### GET: /videos

----
Return all videos from database

* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            _id,
            title,
            thumbnailUrl,
            youtubeUrl,
            productId,
            comments: [
                commentId,
                commentId,
            ],
        }
    ]
  }
  ```
  
### GET: /videos/:id

----
Return specific video from database

* **URL Params**
  ``` 
  :id
  ```
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
          _id,
          title,
          thumbnailUrl,
          youtubeUrl,
          products: [
            {
                  _id,
                  title,
                  price,
                  link,
            }
          ],
        comments: [
            {
                  _id,
                  name,
                  comment,
                  videoId,
                  createdAt,
            }
          ]
        }
    ]
  }
  ```
  
### POST: /videos

----
Creates a new Video and returns the new object.

* **URL Params**  
  None
* **Data Params**  
  ```
  title: String,
  youtubeUrl: String,
  thumbnailUrl: String,
  productId: [ObjectId],
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            videoId,
            title,
            youtubeUrl,
            thumbnailUrl,
            productId": []
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
### GET: /videos/:videoId/comments
----
Return comment with specified Video Id from database

* **URL Params**  
  ```
  :videoId
  ```
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            _id,
            name,
            comment,
            videoId : {
              _id,
              title,
              thumbnailUrl,
              youtubeUrl,
              productId,
              comments,
            },
            createdAt,
        }
    ]
  }
  ```
  
### POST: /videos/:videoId/comments

----
Creates a new Comment and returns the new object.

* **URL Params**  
  ```
  :videoId
  ```
* **Data Params**  
  ```
  name: String,
  comment: String,
  createdAt:Date,
  videoId: {
    ObjectId,
  },
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    message,
    data: [
        {
            name,
            comment,
            videoId,
            _id,
            createdAt,
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
## How To Run In Local
### 1. Set Up The Project
  * After download or clone this project, open the project folder and run this commands in terminal/cmd to install the dependencies
    ```
    npm install
    ```
  * Use this command to run this project
    ```
    npm run dev
    ```
### 2. Set Up The Database
  * Before you run the project, you need to connect and create the **database** and **collections**, you can see the database structure above or [Click Here](#database-structure).
  * Create `.env` file and put this code `DATABASE_URL = mongodb://localhost:27017/yourDatabaseName`, dont forget to change the database name with your database name.
    
### 3. Run The Project
  * Run the project with this command.
    ```
    npm run dev
    ```
  * Open your browser and enter link, see the API Structure [Here](#api-structure).
    ```
    http://localhost:3000/api/video
    ```
  * OPTIONAL: you can run the project with postman, you can check this project postman API documentations [Here](https://www.postman.com/shodiqimamp/workspace/gigih-3-0/collection/13102716-fce5fda1-d33c-419d-be3a-329055bc5e3b?action=share&creator=13102716).
  * Add Product data to database with this POST API `http://localhost:3000/api/product` using this command in your terminal/bash/cmd.
    ```
    curl -X POST -H "Content-Type: application/json" -d '{
    "title": "Judul Product",
    "price": 500000,
    "link": "https://www.tokopedia.com/"
    }' http://localhost:3000/api/product
    ```
  * Get all data Products from Database with this API link `http://localhost:3000/api/product` on your browser or postman.
  * Add Video data to database with this POST API `http://localhost:3000/api/videos` using this command in your terminal/bash/cmd. Don't forget to change value in `productId` field with `_id` from Product Collection.
    ```
    curl -X POST -H "Content-Type: application/json" -d '{
    "title": "Judul Video",
    "youtubeUrl": "https://www.youtube.com/",
    "thumbnailUrl": "https://example.com/thumbnail.jpg",
    "productId": "enter id Product"
    }' http://localhost:3000/api/videos
    ```
  * Get all data Videos from Database with this API link `http://localhost:3000/api/videos` on your browser or postman.
  * Get specific data Video by Id from Database with this API link `http://localhost:3000/api/videos/:videoId` on your browser or postman and dont forget to change param `:videoId`.
  * Add Comment data to database with this POST API `http://localhost:3000/api/videos/:videoId/comments` using this command in your terminal/bash/cmd. Dont forget to change param `:videoId` and value in `videoId` field with `_id` from video collection.
  ```
    curl -X POST -H "Content-Type: application/json" -d '{
    "name": "My Name",
    "comment": "This Comment",
    "videoId": "enter id Video"
    }' http://localhost:3000/api/videos/:videoId/comments
  ```
  * Get all data Comments Video from Database with this API link `http://localhost:3000/api/videos/:videoId/comments` on your browser or postman.
  * Get specific data Video by Id from Database with this API link `http://localhost:3000/api/videos/:videoId` on your browser or postman and dont forget to change param `:videoId`.
    
