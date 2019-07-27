# Alfred Backend Intern Project

### Todo List
 功能:  

    取得所有todos  

    取得特定id todo  

    建立todo  

    刪除todo    

 Todo schema:  

    _id  

    item (待辦事項內容)  

    author (待辦事項填寫者)  


api:  

    GET /todos/items 取得所有todo items  

    GET /todos/item/:id 取得特定id item  

    POST /todos/create 建立todo，request.body需有item與author兩個properity  

    DELETE /todos/delete/:id 刪除特定id item  


測試:  

    Mocha + chai + chai-http  

    ```
        npm test
    ```

佈署:  

    佈署至 heroku   

    base URL: "https://alfred-todo-list.herokuapp.com"  
    
