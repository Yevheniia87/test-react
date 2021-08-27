import React from "react";
import { Button } from "../Button/Button.jsx";
import styles from "./forma.module.css";

class Forma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };
  render() {
    const { value } = this.state;
    // const { onSubmit } = this.props;
    return (
      <form style={{ marginBottom: "32px" }} onSubmit={this.onSubmit}>
        <p>Добавление города</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => {
            this.setState({
              value: e.currentTarget.value,
            });
          }}
        />
        <Button
          type="submit"
          //   onClick={() => {
          //     console.log("clicked");
          //     this.setState({ showed: !this.state.showed });
          //   }}
          buttonName="Добавить"
          disabled={!value}
        />
      </form>
    );
  }
}
export { Forma };
