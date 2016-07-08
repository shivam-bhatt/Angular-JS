var app = angular.module("PostApp",["ngStorage"]);

app.controller("AddPostController", function($scope, $localStorage){
    $scope.savedPosts = [];
    if($localStorage.post != null)
          {
              $scope.savedPosts = $localStorage.post;
          }
        else
            {
               $scope.savedPosts = []; 
            }
    
    $scope.AddPost = function(){
        $scope.comments = [];
        var date = new Date();
    $scope.savedPosts.push({id:date.toString().substring(8,24), title: $scope.title , content: $scope.content,comment:JSON.stringify($scope.comments)});
        $localStorage.post = $scope.savedPosts;
        $scope.title ="";
        $scope.content="";
    }
    
    $scope.UpdatePost = function(post) {
        console.log($scope.savedPosts.indexOf(post));
        var id = post.id;
         console.log($scope.id);
        $scope.savedPosts.indexOf(post).title = $scope.title;
        $scope.savedPosts.indexOf(post).content = $scope.content;
        $localStorage.post = $scope.savedPosts;
    }
    
    $scope.DeletePost = function(post){
        $scope.savedPosts.splice($scope.savedPosts.indexOf(post), 1);
        $localStorage.post = $scope.savedPosts;
    }
});