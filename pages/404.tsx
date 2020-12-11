import { useState } from 'react'
import { Icon, Label, Menu } from 'semantic-ui-react'

interface Props {
  activeItem: string | undefined
}
const Index = (): JSX.Element => {
  const [state, setState] = useState<Props>({ activeItem: 'Groups' })
  return (
    <Menu secondary vertical>
      <Menu.Item
        name="Groups"
        active={state.activeItem === 'Groups'}
        onClick={(e, { name }) => setState({ activeItem: name })}
      >
        <Icon className="icomoon i-folder" />
        Groups
      </Menu.Item>
      <Menu.Item
        name="Trash"
        active={state.activeItem === "" }
        <Icon className="icomoon i-trash" />
        <Label>140+</Label>
        Trash
      </Menu.Item>
      <Menu.Item
        name="Invites"
        active={state.activeItem === 'Invites'}
        onClick={(e, { name }) => setState({ activeItem: name })}
      >
        <Icon className="icomoon i-user-add" />
        <Label>19+</Label>
        Invites
      </Menu.Item>
      <Menu.Item
        name="Bookmarks"
        active={state.activeItem === 'Bookmarks'}
        onClick={(e, { name }) => setState({ activeItem: name })}
      >
        <Icon className="icomoon i-bookmark" />
        <Label>14+</Label>
        Bookmarks
      </Menu.Item>
      <Menu.Item
        name="Setting"
        active={state.activeItem === 'Setting'}
        onClick={(e, { name }) => setState({ activeItem: name })}
      >
        <Icon className="icomoon i-icon-cog" />
        Settingss
      </Menu.Item>
    </Menu>
  )
}
export default Index
