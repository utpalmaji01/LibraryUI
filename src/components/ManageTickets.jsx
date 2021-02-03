import { Divider, Typography, Button } from "@material-ui/core";
import React, { Component } from "react";
import vsCodeLogo from "../assets/image/vsCodeLogo.png";
import "../style/manageTickets.scss";
class ManageTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [
        {
          id: "23047",
          name: "James",
          title: "Ipsum dolor sit amet consectetur adipisicing.",
          description:
            "Aliquam laborum excepturi, enim adipisci dolorem rem nam asperiores vero",
          lastResponded: "3 hours ago",
          dueIn: " 2 Days",
        },
        {
          id: "23135",
          name: "Stella",
          title: "Ipsum dolor sit amet consectetur adipisicing.",
          description:
            "Aliquam laborum excepturi, enim adipisci dolorem rem nam asperiores vero",
          lastResponded: "3 hours ago",
          dueIn: " 2 Days",
        },
        {
          id: "23246",
          name: "John Doe",
          title: "Ipsum dolor sit amet consectetur adipisicing.",
          description:
            "Aliquam laborum excepturi, enim adipisci dolorem rem nam asperiores vero",
          lastResponded: "3 hours ago",
          dueIn: " 2 Days",
        },
      ],
    };
  }

  ticketLength = () => {
    return this.state.tickets.length;
  };

  render() {
    return (
      <div className="manage-tickets-container">
        <Typography variant="h5" className="manage-tickets-header">
          Manage Tickets
        </Typography>
        <div className="all-tickets">
          {this.state.tickets.map((ticket, index) => (
            <div key={ticket.id} className="each-ticket">
              <div className="each-ticket-container">
                <div className="ticket-member-pic">
                  <img src={vsCodeLogo} alt="ticket-member" className="ticket-member-image"/>
                </div>
                <div className="ticket-details">
                  <div className="ticket-header">
                    <Typography variant="h6" className="ticket-member-name">
                      {ticket.name}:
                    </Typography>
                    <Typography variant="h6" className="ticket-member-id">
                      [#{ticket.id}]
                    </Typography>
                    <Typography variant="h6" className="ticket-titlle">
                      {ticket.title}
                    </Typography>
                  </div>
                  <Typography variant="body2" className="ticket-description">
                    {ticket.description}
                  </Typography>
                  <div className="ticket-action-dates">
                    <Typography variant="caption" className="last-responded">
                      Last responded :{ticket.lastResponded}
                    </Typography>
                    <Typography variant="caption" className="due-in">
                      Due in :{ticket.dueIn}
                    </Typography>
                  </div>
                </div>
                <div className="ticket-action-button">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="action-button"
                  >
                    Manage
                  </Button>
                </div>
              </div>
              {this.ticketLength() === index + 1 ? null : (
                <Divider className="ticket-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ManageTickets; 
