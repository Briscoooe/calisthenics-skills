import * as React from "react";
import classnames from "classnames";
import "./Tooltip.css";
import HSeparator from "./ui/HSeparator";
import { getIsElementInWindow } from "../helpers";

interface Props {
  tooltipTitle?: string;
  tooltipDescription?: string;
}

interface State {
  isElementInWindow: boolean;
}

class Tooltip extends React.Component<Props, State> {
  static defaultProps: Props = {
    tooltipTitle: "Title",
    tooltipDescription: "Some information"
  };

  private tooltipRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.tooltipRef = React.createRef();

    this.state = {
      isElementInWindow: true
    };
  }

  componentDidMount() {
    const elHeight = this.tooltipRef.current!.clientHeight;
    const elTopPosition = this.tooltipRef.current!.getBoundingClientRect().top;

    const isElementInWindow = getIsElementInWindow(
      window.innerHeight,
      window.scrollY,
      elTopPosition,
      elHeight
    );

    this.setState({
      isElementInWindow
    });
  }

  render() {
    const { tooltipTitle, tooltipDescription } = this.props;
    const { isElementInWindow } = this.state;

    return (
      <div
        ref={this.tooltipRef}
        data-testid="tooltip-container"
        className={classnames("Tooltip__hover-container", {
          "Tooltip__hover-container--outside-window": !isElementInWindow
        })}
      >
        <div className="Tooltip">
          <h1 className="Tooltip__title">{tooltipTitle}</h1>
          <HSeparator />
          <p className="Tooltip__content">{tooltipDescription}</p>
        </div>
      </div>
    );
  }
}

export default Tooltip;
