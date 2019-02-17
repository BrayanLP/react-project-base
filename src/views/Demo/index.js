import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getData();
    this.props.getDataId();
  }
  render() {
    const { result, resultId } = this.props;
    console.log(result, this.props);
    return (
      <div>
        <h1>Listado de Usuario</h1>
        <ul>
          {result &&
            result.map((res, index) => {
              return <li key={index + 1}>{res.name}</li>;
            })}
        </ul>
        <h1>Detalle del Usuario: 1</h1>
        {resultId && (
          <div>
            Nombre: {resultId.name}
            <br />
            Email: {resultId.email}
            <br />
            Celular: {resultId.phone}
            <br />
            Página Web: {resultId.website}
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  result: state.DemoModels.result,
  resultId: state.DemoModels.resultId
});

const mapDispatch = ({ DemoModels: { fetchData, fetchIdData } }) => ({
  getData: () => fetchData(),
  getDataId: data => fetchIdData(1)
});

DemoComponent.propTypes = {
  result: PropTypes.array,
  resultId: PropTypes.object
};
export default connect(
  mapState,
  mapDispatch
)(DemoComponent);
