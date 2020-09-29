import React, { Component } from "react";
import PopUpModal from "./common/modal";
import JumboTron from "./common/jumbotron";
import ProjectForm from "./projectForm";
import ListGroup from "./common/listGroup";
import ProjectOrder from "./projectOrder";
import DropDownBtn from "./common/dropDownBtn";

class ProjectManager extends Component {
  state = { selectedTab: { id: 1, name: "Add Projects" } };

  handleModalClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleTabChange = (item) => {
    this.setState({ selectedTab: item });
  };

  render() {
    const { selectedTab } = this.state;

    const { clientWidth } = this.props;

    const text = {
      message: "Project Manager",
      description:
        selectedTab.name === "Order Projects"
          ? "Drag and Drop Projects to Re-Order"
          : "Add Projects Below",
    };

    const options = [
      { id: 1, name: "Add Projects" },
      { id: 2, name: "Order Projects" },
    ];

    return (
      <>
        {" "}
        <JumboTron message={text.message} description={text.description} />
        <PopUpModal
          show={this.state.show}
          header="Thank You"
          body="Project Successfully Added"
          onClose={this.handleModalClick}
        />
        {clientWidth < 683 && (
          <div className="row" style={{ margin: "50px 0" }}>
            <div className="col d-flex justify-content-center">
              <DropDownBtn
                title={"Select Items to Manage"}
                items={options}
                selectedTab={selectedTab}
                handleChange={this.handleTabChange}
              />
            </div>
          </div>
        )}
        <div className="row">
          {clientWidth > 683 ? (
            <div className="col-2">
              <div className="row">
                <div className="col">
                  <ListGroup
                    selectedTab={selectedTab}
                    handleChange={this.handleTabChange}
                    items={options}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {selectedTab.name === "Add Projects" ? (
            <ProjectForm clientWidth={clientWidth} />
          ) : (
            <ProjectOrder clientWidth={clientWidth} />
          )}
        </div>
      </>
    );
  }
}

export default ProjectManager;
