export default function Tabs({children, buttons, ButtonsContainer="menu"}) {
	//const ButtonsContainer = buttonsContainer; need small capital letter if destructured and used with const

	return (
		<>
			<ButtonsContainer>
				{buttons}
			</ButtonsContainer>
			{children}
		</>
	)
}