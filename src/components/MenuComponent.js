import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            selectedDish: null
        }
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount constructor is invoked');
    } 

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderComments(comments) {
        let commentsgroup = comments.comments;
        const listItem = commentsgroup.map(
            (comm) =>
                <ul key={comm.id} className="list-unstyled">
                    <li>{comm.comment}</li>
                    <li>-- {comm.author}, {(comm.date)} </li>
                </ul>        
        );

        return (
            <div className="container">
                <h3>Comments</h3>
                {listItem}
            </div>
            
        );
        
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src ={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                                    <CardText><p>{dish.description}</p></CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish)}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} 
                        onClick={()=> this.onDishSelect(dish)}>
                        
                        <CardImg width="100%" src={dish.image} 
                            alt={dish.name}/>

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
                <div >
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;