const columns = {
  handleBy: { name: "handle By" },
  hardHandleBy: { name: "hard handle By" },
  orderNumber: { name: "order number" },
  vc: { name: "vc" },
  gds: { name: "gds" },
  scenario: { name: "scenario" },
  officeId: { name: "scenario" },
  firstDeparture: { name: "first departure" },
  placed: { name: "placed" },
  status: { name: "status" },
  client: { name: "client" },
  assignee: { name: "assignee" },
}

const getColumns = (columns: Record<string, Record<string, string>>) =>
  Object.entries(columns).map(([id, { name }]) => ({ id, name }))

console.log(getColumns(columns))
