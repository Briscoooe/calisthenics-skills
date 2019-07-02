import * as React from "react";
import classnames from "classnames";
import "./Tooltip.css";
import HSeparator from "./ui/HSeparator";
import { getIsElementInWindow } from "../helpers";

const defaultProps = {
  tooltipTitle: "Title",
  tooltipDescription: "Some information"
};

type Props = typeof defaultProps;

interface State {
  isElementInWindow: boolean;
}

class Tooltip extends React.Component<Props, State> {
  static defaultProps = defaultProps;

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
          <h2 className="Tooltip__title">{tooltipTitle}</h2>
          <HSeparator />
          <p className="Tooltip__content">{tooltipDescription}</p>
        </div>
      </div>
    );
  }
}

export default Tooltip;
