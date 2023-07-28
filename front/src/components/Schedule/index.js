import { Link } from "react-router-dom"
import { ScheduleContainer, ScheduleTableHeadCell, ScheduleTable, ScheduleTableBody, ScheduleTableData, ScheduleTableHead, ScheduleTableRow, ScheduleTitle, ScheduleTableContainer, EquipmentLink } from "./style"

function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleTitle>Schedule</ScheduleTitle>
      <ScheduleTableContainer>
        <ScheduleTable>
          <ScheduleTableHead>
            <ScheduleTableRow>
              <ScheduleTableHeadCell>Lesson</ScheduleTableHeadCell>
              <ScheduleTableHeadCell>Start</ScheduleTableHeadCell>
              <ScheduleTableHeadCell>End</ScheduleTableHeadCell>
              <ScheduleTableHeadCell>Lecturer</ScheduleTableHeadCell>
              <ScheduleTableHeadCell>Equipment</ScheduleTableHeadCell>
            </ScheduleTableRow>
          </ScheduleTableHead>
          <ScheduleTableBody>
            <ScheduleTableRow>
              <ScheduleTableData>Astronomy A</ScheduleTableData>
              <ScheduleTableData>08.00 Am</ScheduleTableData>
              <ScheduleTableData>10.45 Am</ScheduleTableData>
              <ScheduleTableData>Dr Lorem</ScheduleTableData>
              <ScheduleTableData>
               <EquipmentLink to={"#"}>Google Meet</EquipmentLink>
              </ScheduleTableData>
            </ScheduleTableRow>
            <ScheduleTableRow>
              <ScheduleTableData>Geography B</ScheduleTableData>
              <ScheduleTableData>08.00 Am</ScheduleTableData>
              <ScheduleTableData>10.45 Am</ScheduleTableData>
              <ScheduleTableData>Dr Lorem</ScheduleTableData>
              <ScheduleTableData>
               <EquipmentLink to={"#"}>Google Meet</EquipmentLink>
              </ScheduleTableData>
            </ScheduleTableRow>
            <ScheduleTableRow>
              <ScheduleTableData>Mathematic C</ScheduleTableData>
              <ScheduleTableData>08.00 Am</ScheduleTableData>
              <ScheduleTableData>10.45 Am</ScheduleTableData>
              <ScheduleTableData>Dr Lorem</ScheduleTableData>
              <ScheduleTableData>
               <EquipmentLink to={"#"}>Google Meet</EquipmentLink>
              </ScheduleTableData>
            </ScheduleTableRow>
          </ScheduleTableBody>
        </ScheduleTable>
      </ScheduleTableContainer>
    </ScheduleContainer>
  )
}

export default Schedule