import React, { Component } from 'react'

export class Color extends Component {
    const [bgClr, setBgClr] = useState('white');
    const AnnualHandler = () => {
        setBgClr('yellow');
        console.log(bgClr);
      };
      
    render() {
        return (
            <div>
                <Button
            onClick={AnnualHandler}
            variant="outline-light"
            style={{ background: {bgClr} }}>
            <div
              className="pt-3 pb-3 ml-3 mr-3"
              style={{ background: '#f8f9fa' }}>
              <h4 style={{ color: 'var(--main)' }}>
                <b>$ 15</b>
              </h4>
            </div>
          </Button>
            </div>
        )
    }
}

export default Color
