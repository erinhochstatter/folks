import { useState } from "react"
import { SvgComponent } from "./SvgComponent"
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

interface Props {
  svgProps?: React.SVGProps<SVGSVGElement>
}

type SelectOption = {
  label: string
  value: string
}

export const Face: FC<Props> = (props: Props) => {
  const FILL_COLORS: SelectOption[] = [
    {label:"Champagne", value: "#FAE7D0"},
    {label: "Zombie", value: "#dfc183"},
    {label: "demerara", value: "#aa724b"},
    {label: "peachy", value: "#ffcb99"},
    {label: "putty", value: "#ceab69"},
    {label: "coco", value: "#945d37"},
    {label: "pinky", value: "#feb187"},
    {label: "korma", value: "#7c4b2a"},
    {label: "walnut", value: "#483628"}
  ]

  const FACE_SHAPES: SelectOption[] = [
    {label: "Heart-Shaped", value: "heart"},
    {label: "Oval-Shaped", value: "oval" }
  ]

  const [fillColor, setFillColor] = useState(FILL_COLORS[0].value)
  const [fileName, setFileName] = useState(FACE_SHAPES[0].value)

  const SelectOption : FC<SelectOption> = (option: SelectOption) => {
    <ListboxOption value={option.value} key={option.label}>option.label</ListboxOption>
  }

  return (
    <div>
      <SvgComponent imageType='face' imageName={fileName} svgProps={{fill: fillColor} } />
      <form id="face-svg-options">
        <div>
          <span id="face-shape-label">Choose a face shape</span>
          <Listbox aria-labelledby="Faceshape selector" value={fileName} onChange={setFileName}>
            <ListboxButton/>
            <ListboxPopover>
              <ListboxList>
                { FACE_SHAPES.map((option) => <SelectOption option={option} key={option.label}/>)}
              </ListboxList>
            </ListboxPopover>
          </Listbox>
        </div>
        <div>
          <span aria-labelledby="Skintone selector" id="face-skintone-label">Choose a skin tone</span>
          <Listbox onChange={setFillColor}>
            { FILL_COLORS.map((option) => <SelectOption option={option} key={option.label}/>)}
          </Listbox>
        </div>
      </form>
    </div>
  )
}

