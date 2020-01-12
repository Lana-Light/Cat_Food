import React from "react";
//import logo from './logo.svg';
import "./Packet.css";

class Packet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    };
    this.mode = this.props.mode;
  }

  changeMode(e) {
    if (this.state.mode !== "disabled") {
      this.mode = this.mode === "active" ? "default" : "active";
    }
  }
  acceptChanges(e) {
    if (this.state.mode !== "disabled" && this.state.mode !== this.mode) {
      this.setState({
        mode: this.mode
      });
    }
  }

  render() {
    let cardClasses = ["card"];
    this.state.mode === "default" && cardClasses.push("card_default");
    this.state.mode === "active" && cardClasses.push("card_active");
    this.state.mode === "disabled" && cardClasses.push("card_disabled");
    let cardText = (
      <p className="card__text">
        Чего сидишь? Порадуй котэ,{" "}
        <button className="buy" onClick={this.changeMode.bind(this)}>
          купи.
        </button>
      </p>
    );
    if (this.state.mode === "active") {
      cardText = <p className="card__text">{this.props.description}</p>;
    } else if (this.state.mode === "disabled") {
      cardText = (
        <p className="card__text">Печалька, с {this.props.with} закончился.</p>
      );
    }
    const mC = this.props.mice > 1;
    const miceCount = mC ? <b>{this.props.mice}</b> : null;
    /*1,21 мышь
        2-4,22-24 мыши
        5-20,25-30 мышей*/
    let nounEnding = "ь"; // "и" "ей"
    const mice = this.props.mice.toString();
    const miceEnding = +mice[mice.length - 1];
    switch (miceEnding) {
      case 1:
        nounEnding = "ь";
        break;

      case 2:
      case 3:
      case 4:
        nounEnding = "и";
        break;

      default:
        nounEnding = "ей";
        break;
    }
    const mass = this.props.mass.toString().replace(".", ",");
    return (
      <div className={cardClasses.join(" ")}>
        <div
          className="packet"
          onClick={this.changeMode.bind(this)}
          onMouseLeave={this.acceptChanges.bind(this)}
        >
          <div className="rectangle__head">
            <span className="packet__title">Сказочное заморское яство</span>
            <span className="packet__title2">Котэ не одобряет?</span>
          </div>
          <div className="rectangle__body">
            <h2 className="title_h2">Нямушка</h2>
            <div className="subtitle_h2">с {this.props.with}</div>
            <p className="benefits">
              <b>{this.props.portions}</b> порций
            </p>
            <p className="benefits">
              {miceCount}
              {mC && " "}мыш{nounEnding} в подарок
            </p>
            {this.props.phrase && (
              <p className="benefits">{this.props.phrase}</p>
            )}
            <div className="mass">
              <div className="mass__val">{mass}</div>КГ
            </div>
          </div>
        </div>
        {cardText}
      </div>
    );
  }
}

export default Packet;
