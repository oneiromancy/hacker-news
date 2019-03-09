function countComments(data){

    let commentNumber = 0;

    function recursiveSum(arr){

        for(let i = 0; i < arr.children.length; i++){

            if(arr.children[i].text) commentNumber++;
            
            if(arr.children[i].children.length > 0){
                commentNumber += countComments(arr.children[i]);
            }
        }
    
    }

    recursiveSum(data);

    return commentNumber;

}

export default countComments;