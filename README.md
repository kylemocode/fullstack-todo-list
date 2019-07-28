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

### 前端頁面

URL: https://alfred-todo-list.herokuapp.com/  


完成項目:  

    RWD , 顯示TODO items列表，並且可以新增刪除，並且佈署到heroku。  


## 作業心得  

這次選擇除了自己寫api與單元測試外，也把前端架起來並串接自己寫的api，並且佈署到heroku上，完成一個流程上算完整的小作品。  

後端部分遇到比較大的難題是限定使用mongodb native，讓原本習慣使用mongoose的我有點頭痛，再來是單元測試的部分，以前摸過 jest 搭配 supertest，這次限定使用 mocha 與 chai 、chai-http 讓我又花了滿多時間在看document的，雖然語法不一樣，但是大致上流程跟jest差不多，加上自己的api也相對簡單，因此最後有順利完成。比較可惜的是，沒有多建立一個seed DB專門給測試用，我想這個方法才不會衍生出一些額外問題。使用before all 跟 after all 也花了一些時間研究。  

前端部分是用react開發，本來要試著使用context api的，但因為快到繳交作業的期限了所以最後沒有使用。這次做這個作品嘗試都使用functional component 搭配 react hook ，幾乎沒有用到class based的component，但也因此踩了一些坑，讓state的更新出了一點小問題，因此最後的成品在刪除與新增後不會自動重新渲染(已經想到解法，但時間來不及)。總之前端因為時間不足完成的有點草率與粗略，UI也沒有經過事先設計，目前自己計畫將UI重新設計後，重新更改程式架構，加入context API，渲染加入一些基本動畫，如果您願意看看之後的成果，我很樂意在完成後通知您，讓您看看完整的作品。

2019/07/28 補充  

後來自己利用一些時間改寫了一下，引入了context api，有了global state的機制，畫面也會在新增刪除時自動渲染，只是目前整體使用者體驗不是太好，日後會將這個做為side project慢慢改進。


    
