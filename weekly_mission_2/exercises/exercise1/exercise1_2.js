const repo = {
    title:"Launch X",
    branchName:"Main",
    dateCreated:"04/05/2022",
    status:"Active",
    repositoryNameAssociated:"LaunchX",
    getStatus: function(){
        return `Status:  ${this.status} `
    },
    getTitleAndAuthor: function(){
        return `Title:  ${this.title} was created by ${this.author}`
    }
   }

   console.log(repo.getTitleAndAuthor())
   console.log(repo.getStatus())