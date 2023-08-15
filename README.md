## FINAL PROJECT

Description : This project was made to fulfill the Final Project Fullstack Engineer Track assignment from the GIGIH 3.0 program

## Table Of Content
* [Database Structure](#database-structure)
* [API Structure](#api-structure)
    * [Product API](#1-product-api)
    * [Video API](#2-video-api)
    * [Comment API](#3-comment-api)
* [API Request Response List](#api-request-response-list)
* [How To Run in Local](#how-to-run-in-local)
   * [1. Backend](#a-backend)
      * [Set Up The Project](#1-set-up-the-project)
      * [Set Up The Database](#2-set-up-the-database)
      * [Run The Project](#3-run-the-project)
   * [2. Frontend](#b-frontend)

## Database Structure
The architectural database used in this project is `MongoDB`, this project have 3 Collections, video, comment, and product.

### Video Collection
```
{
  title: String
  thumbnailUrl: String
  youtubeUrl: String
},
```

### Comment Collection
```
{
  video_id: String
  name: String
  comment: String
  createdAt: Date
}
```
### Product Collection
```
 {
  video_id: String
  title: String
  price: Number
  link: String
}
```

## API Structure
The API in this project runs on a local server `http://localhost:3080/api`.

### 1. Product API

```
API                | Controller Function

GET: /videos/:id/product    | `controller.getProducts`
POST: /videos/:id/product   | `controller.addProduct`
```
### 2. Video API

```
API                | Controller Function

GET: /videos       | `controller.getVideos`
GET: /videos/:id   | `controller.getVideoById`
POST: /videos      | `controller.addVideo`
```
### 3. Comment API

```
API                             | Controller Function

GET: /videos/:id/comments  | `controller.getComments`
POST: /videos/:id/comments | `controller.addComment`
```
## API Request Response List

### GET: /videos/:id/product 

----
Return all videos from database

* **URL Params**  
  `:id`
* **Data Params**
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    data: [
        {
          _id,
          video_id,
          title,
          price,
          link,
        }
    ]
  }
  ```

### POST: /videos/:id/product

----
Creates a new Product and returns the new object.

* **URL Params**  
  `:id`
* **Data Params**  
  ```
  video_id: String
  name: String
  price: Number
  img_url: String
  link: String
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    data: [
        {
            _id
            video_id
            name
            price
            img_url
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
    data: [
        {
            _id,
            title,
            thumbnailUrl,
            youtubeUrl,
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
    data: [
        {
          _id,
          title,
          thumbnailUrl,
          youtubeUrl,
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
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    data: [
        {
            videoId,
            title,
            youtubeUrl,
            thumbnailUrl,
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
### GET: /videos/:id/comments
----
Return comment with specified Video Id from database

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
    data: [
        {
            _id,
            name,
            comment,
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
  :id
  ```
* **Data Params**  
  ```
  name: String,
  comment: String,
  createdAt:Date,
  video_id: String
  ```
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  - Code: 200
  - Content: 
  ```
  {
    data: [
        {
            _id,
            name,
            comment,
            videoId,
            createdAt,
        }
    ]
  }
  ```
* **Error Response:**
  - Code: 500
  - Content: { error: "Internal Server Error" }
  
## How To Run In Local
## A. Backend
----
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
  * Create `.env` file and put this code `DATABASE_URL = mongodb://localhost:27017/yourDatabaseName`, dont forget to change the database name with your local database or with your mongoDb atlas connection string.
    
### 3. Run The Project
  * Run the project with this command.
    ```
    npm run dev
    ```
  * Open your browser and enter link, see the API Structure [Here](#api-structure).
    ```
    http://localhost:3080/api/video
    ```
  * Add Video data to database with this POST API `http://localhost:3080/api/videos` using this command in your terminal/bash/cmd.
    ```
    curl -X POST -H "Content-Type: application/json" -d '{
    "title": "Laptop Murah utk Content Creation, CAD, Edit Video, 3D Animasi & Pekerjaan Berat, Di bawah 15 Juta",
    "youtubeUrl": "https://www.youtube.com/watch?v=ivrWF-Bps54",
    "thumbnailUrl": "https://i.ytimg.com/vi/ivrWF-Bps54/maxresdefault.jpg"
    }' http://localhost:3080/api/videos
    ```
  * Get all data Videos from Database with this API link `http://localhost:3080/api/videos` on your browser or postman.
  * Get specific data Video by Id from Database with this API link `http://localhost:3080/api/videos/:videoId` on your browser or postman and dont forget to change param `:videoId`.
   
  * Add Product data to database with this POST API `http://localhost:3080/api/videos/:id/product` using this command in your terminal/bash/cmd, and dont forget to change param `:id`.
    ```
    "video_id": "[change with video_id from videos collection that you want]",
    "name": "Laptop Gaming Axioo Pongo 5 - RTX3070 I5 11400 32GB 512SSD 16inch 100SRGB - Non Bundle, 16 GB",
    "price": 13199000,
    "img_url": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/14/d173f9fb-4855-4706-a4c3-01094efdbf13.png",
    "link": "https://tokopedia.link/gJrhNnCVfCb"
    }' http://localhost:3080/api/videos/:id/product
    ```
  * Get all data Products from Database with this API link `http://localhost:3080/api/videos/:id/product` on your browser or postman, and dont forget to change param `:id`.
    
  * Add Comment data to database with this POST API `http://localhost:3080/api/videos/:id/comments` using this command in your terminal/bash/cmd. Dont forget to change param `:id` and value in `video_id` field with `_id` from video collection.
  ```
  curl -X POST -H "Content-Type: application/json" -d '{
  "video_id": "[change with video_id from videos collection that you want]",
  "name": "Imam",
  "comment": "Keren juga laptopnya"
 }' http://localhost:3080/api/videos/:id/comments
  ```
  * Get specific data Video by Id from Database with this API link `http://localhost:3080/api/videos/:id` on your browser or postman and dont forget to change param `:id`.

## B. Frontend
----
### 1. Set Up The Project
  * After download or clone this project, open the project folder and run this commands in terminal/cmd to install the dependencies
    ```
    npm install
    ```
* In the project file `(VideoDetail & Homepage)`, change the API with your backend API. 
    ```
    http://localhost:3080/api/videos
    ```
    
### 2. Run The Project
  * Run the project with this command.
    ```
    npm start
    ```
  * Open your browser and enter this link
    ```
    http://localhost:3000/
    ```
