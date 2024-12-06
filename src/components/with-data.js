import React, { Component } from 'react';
import '../styles/styles.css';  // от компонентов в src/components
 // Импорт единого файла стилей

const withData = (WrappedComponent, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
    };

    componentDidMount() {
      getData()
        .then(data => {
          this.setState({ data, loading: false });
        })
        .catch(error => {
          console.error('Error loading data', error);
        });
    }

    render() {
      const { data, loading } = this.state;

      if (loading) {
        return <div className="loading">Loading...</div>;
      }

      return <WrappedComponent data={data} {...this.props} />;
    }
  };
};

export default withData;
