import React from 'react';

class InputForm extends React.Component{

  constructor(props) {
          super(props);
          console.log(props)
          this.state = {
              searchString: '',
              result: null
          };
  }

  updateSearchString(e) {
        this.setState({
              searchString: e.target.value ? e.target.value : ''
        })
  }

  render() {
        return (
            <div>
                <input value={this.state.searchString} onChange={e => this.updateSearchString(e)} />
                <button onClick={this.props.onPushed.bind(this, this.state.searchString)}>Узнать погоду</button>
            </div>
        );
  }
}
export default InputForm;
