import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


function ProfileSideBar(props){
  return (
    <Box>
      <img src={ `https://github.com/${props.githubUser}.png` } style={{ borderRadius: '8px'}} />
    </Box>
  )
}


export default function Home() {
  // return <Title>My page</Title>

  const githubUser = "bcsmacena";
  const githubUsers = [
    'juunegreiros', 
    'peas',
    'omariosouto',
    'rafaballerini',
    'felipefialho',
  ];

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
        <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className="friendsArea" style={{gridArea: 'friendsArea'}}>
        <ProfileRelationsBoxWrapper>
          Friends ({githubUsers.length})
          <ul>
            {githubUsers.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>    
  ) 
}
