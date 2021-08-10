class Toltip{}
class ProjectItem{

}

class ProjectList{
  prjects =[];
  constructor(type){
    const projectItems = document.querySelectorAll(`#${type}-projects li`)
    for(const prjItem of projectItems){
      this.prjects.push(prjItem)
    }

  }
}

class App{
  static init(){
    const activeProjectsList = new ProjectList('active')
    const finishedProjectsList = new ProjectList('finished')
    console.log('active',activeProjectsList)
    console.log('finished',finishedProjectsList)
  }
}
App.init()