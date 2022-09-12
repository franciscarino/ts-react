interface IBoxProps {
  id: string, 
  width: string,
  height:  string, 
  backgroundColor: string,
  remove: (id: string) => void;
}

/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */
function Box({ id, width = "5", height = "5", backgroundColor, remove }: IBoxProps) {

  /** Remove a box. */
  function handleRemove():void {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}


export default Box
export type {IBoxProps}
