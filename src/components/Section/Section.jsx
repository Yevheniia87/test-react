import React from "react";
import shortid from "shortid";
import { Forma } from "../Forma/Forma.jsx";
import { Button } from "../Button/Button.jsx";
import { Title } from "../Title/Title.jsx";
import { Card } from "../Card/Card.jsx";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showed: false,
      cities: [],
    };
  }
  componentDidMount() {
    const localCities = localStorage.getItem("cities");
    const parsedCities = JSON.parse(localCities);
    this.setState({ cities: parsedCities || [] });
  }
  componentDidUpdate() {
    localStorage.setItem("cities", JSON.stringify(this.state.cities));
  }
  // componentWillUnmount() {
  //   this.handleClearAll();
  // }
  handleSubmit = (city) => {
    console.log("data", this.state.cities);
    this.setState((prevState) => ({
      cities: [...prevState.cities, { id: shortid.generate(), name: city }],
    }));
  };
  handleRemove = (id) => {
    this.setState({
      cities: this.state.cities.filter((city) => city.id !== id),
    });
  };
  handleClearAll = () => {
    localStorage.removeItem("cities");
  };
  render() {
    const { cities, showed } = this.state;
    return (
      <div>
        {cities.length ? <Title title="Города" /> : null}
        {cities.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              name={city.name}
              buttonName="Deleted"
              handleClick={this.handleRemove}
            />
          );
        })}
        <br />
        {cities.length > 5 && (
          <Button
            onClick={this.handleClearAll}
            buttonName="Deleted all cities"
          />
        )}
        {showed && (
          <Forma
            onSubmit={
              this.handleSubmit

              // this.setState((prevState) => ({
              //   cities: [...prevState.cities, city],
              // }));
            }
          />
        )}
        <Button
          onClick={() => {
            this.setState({ showed: !showed });
          }}
          buttonName="Добавить город"
        />
      </div>
    );
  }
}
export { Section };
