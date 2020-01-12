import React from "react";
import "./Packets.css";
import Packet from "./Packet";

class Packets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      packets: []
    };
  }

  componentDidMount() {
    /* Mock data for client-side testing.
       To retrieve data from the server api
        replace this block of code with fetch below. */
    const mockPackets = [
      {
        with: "фуа-гра",
        portions: 10,
        mice: 1,
        mass: 0.5,
        mode: "default",
        description: "Печень утки разварная с артишоками."
      },
      {
        with: "рыбой",
        portions: 40,
        mice: 2,
        mass: 2,
        mode: "active",
        description: "Головы шучьи с чесноком да свежайшая сёмгушка."
      },
      {
        with: "курой",
        portions: 100,
        mice: 5,
        mass: 5,
        phrase: "Заказчик доволен",
        mode: "disabled",
        description: "Филе из цыплят с трюфелями в бульоне."
      }
    ];
    const packets = mockPackets;
    this.setState({
      isLoaded: true,
      packets
    });

    /*
    fetch("/api/packets")
      .then(res => res.json())
      .then(
        result => {
          const packets = result.packets;
          this.setState({
            isLoaded: true,
            packets
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  */
  }

  render() {
    const { error, isLoaded, packets } = this.state;
    if (error) {
      return <div className="error">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <section className="cards">
          {packets.map((packet, i) => {
            return (
              <Packet
                key={i}
                with={packet.with}
                portions={packet.portions}
                mice={packet.mice}
                mass={packet.mass}
                phrase={packet.phrase}
                mode={packet.mode}
                description={packet.description}
              />
            );
          })}
        </section>
      );
    }
  }
}

export default Packets;
