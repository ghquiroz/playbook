const repo = {
    title:"LaunchX",
    repositoryNameAssociated: "Git",
    status:"Activo",
    numberOfComments :1239,
    labels:"VisualSCode",
    author:"Guadalupe",
    dateCreated:"01/05/2022",
    lastUpdated:"08/05/2022",
    getTitleAndAuthor: function(){
        return `Title:  ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `Repository ${this.repositoryNameAssociated} status ${this.status} last update ${this.lastUpdated}`
    }
   }

   console.log(repo.getTitleAndAuthor())
   console.log(repo.getGeneralInfo())
