import { useWeb3Modal } from '@web3modal/ethers/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button className="login-button" onClick={() => open()}>Login</button>
      {/* <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
    </>
  )
}