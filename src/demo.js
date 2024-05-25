import { useState } from "react";

export const Demo = () =>{

    const [isOpen, setIsOpen] =useState(false);

    const ToggleHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <div className="dropdown" >
                <a className="dropdown-toggle" id="dropdownid" data-bs-toggle="dropdown">Menu</a>
                <ul class="dropdown-menu" aria-labelledby="dropdownid">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-toggle" onClick={ToggleHandler} data-bs-toggle="dropdown" href="#nothing">Another action</a>
                        {isOpen &&
                            (<ul>
                            <li><a className="dropdown-item">Child 1</a></li>
                            <li><a className="dropdown-item">Child 1</a></li>
                        </ul>
                            )}
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
        </div>
    );
}