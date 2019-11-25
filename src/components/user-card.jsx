import React from 'react';




class UserCard extends React.Component {

    user = null
    constructor(props) {
        super(props);
        this.user = props.user
    }

    render() {
           
        return (
          <div className='container'>
            <div className='col-xs-8'>
              
              <div className='card'>
                <div className='card-body'>
                <i class="far fa-address-card"></i>
                  <h5 key={this.id} className='card-title'>{this.user.first_name} {this.user.last_name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    <a href={this.user.email}>{this.user.email}</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }



export default UserCard;