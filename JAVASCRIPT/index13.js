function generateSentences(){
    let baseString=`The ${arr.length} ${desc} are`
    const lasIndex=arr.lenght-1
    for(let i=0;i<arr.length;i++){
        if(i===lasIndex){
            baseString+=arr[i]
        }else{
            baseString+=arr[i] + ", "
        }
        
    }
    return baseString
}

const sentences=("highest mountains",["Mount Everest","K2"])
console.log(sentences)