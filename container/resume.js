import React,{Component} from 'react';
import {Menu} from '../component/menu';
import {Home} from '../component/home';
import { AboutMe } from '../component/aboutme';
import {Skills} from '../component/skills';
import {Portfolio} from '../component/portfolio';
import {Contact} from '../component/contact';
 
class Resume extends Component{
    state = {
      active:[true,false,false,false,false,false]
    }
    addClass=(index)=>{
      //  var act = this.state.active.map((val,i)=>{
      //    if(index===i){
      //     console.log(act[i]);
      //     return i;
      //    }
      //  });
      console.log(index);
      var act = this.state.active;
       this.setState({active:[!act[index]]});
       switch(index){
          case 0: this.setState({active:[!act[index]]});
                     break;
          case 1: this.setState({active:[ null,!act[index]]});
                     break; 
          case 2: this.setState({active:[ null,null,!act[index]]});
                     break;
          case 3: this.setState({active:[ null,null,null,!act[index]]});
                     break;
          case 4: this.setState({active:[ null,null,null,null,!act[index]]});
                     break;                         
          default: console.log('error');
                      break;                      
       }
    }
    render(){
        return(
          <div>
            <Menu  class={this.state.active} add={this.addClass}/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contact/>
          </div>
        );
    }
}

export default Resume;