/**
 * Created by dantegg on 2016/11/3.
 */
import React,{Component} from 'react'
import {Row,Col,Form,Input,Icon,Button} from 'antd'
const FormItem = Form.Item
import TweenOne from 'rc-tween-one'
import Animate from 'rc-animate'
import '../css/syslogin.css'
class IndexManagerLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            pause:true,
            reverse:false,
            hideHand:false
        };
    }
    passOnFocus(){
        this.setState({
            pause:false,
            reverse:false,
            hideHand:true
        })
    }
    passOnBlur(){
        let comp = this
        this.setState({
            reverse:true,
            pause:false,
            // hideHand:false
        })
        setTimeout(function () {
            comp.setState({
                hideHand:false
            })
        },200)
    }
    managerLogin(){
        console.log(this.refs.loginName)
    }
    render(){
        return(
            <Row style={{height:"40rem",position:'relative'}}>
                <div style={{top:'40%',position:'absolute'}}>
                    <div className="cartoon">
                        <TweenOne id="handLeft" className="hand-left" animation={{y:-48,x:19,duration:500}} paused={this.state.pause} reverse={this.state.reverse}>
                            <Animate transitionName="fade" transitionAppear>
                                {!this.state.hideHand ?
                                    <div className="hand"></div> : null }
                            </Animate>
                        </TweenOne>
                        <TweenOne id="handRight" className="hand-right" animation={{y:-48,x:-20,duration:500}} paused={this.state.pause} reverse={this.state.reverse}>
                            <Animate transitionName="fade" transitionAppear>
                                {!this.state.hideHand ?
                                    <div className="hand"></div> : null}
                            </Animate>
                        </TweenOne>
                    </div>
                    <Col span={6} offset={9} style={{boxShadow:'0px 5px 5px #dedede',padding:"2rem",border:'1px solid #dedede',borderRadius:"5px",background:"#ededed"}}>
                        <div style={{width:"100%",textAlign:'center'}}>登陆</div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                <Input addonBefore={<Icon type="user" />} ref="loginName" placeholder="用户名" />
                            </FormItem>
                            <FormItem>
                                <Input addonBefore={<Icon type="lock" />} type="password" ref="password" placeholder="密码" onFocus={this.passOnFocus.bind(this)} onBlur={this.passOnBlur.bind(this)}/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" className="login-form-button" style={{width:'100%'}} onClick={this.managerLogin.bind(this)}>
                                    登陆
                                </Button>
                            </FormItem>
                        </Form>
                    </Col>
                </div>
            </Row>
        )
    }
}
export default IndexManagerLogin