export default function SideBar(props) {
  const {onClick,data} = props
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents" onClick={onClick}>
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
        <p className="descriptionTitle">{data?.date}</p>
        <p>
          {data?.explanation}
        </p>
        <button onClick={onClick}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        </div>
      </div>
    </div>
  );
}
