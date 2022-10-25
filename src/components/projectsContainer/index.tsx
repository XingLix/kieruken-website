import {
  FaGithub,
  FaGlobe,
  FaDiscord,
  FaYoutube,
  FaRobot,
} from 'react-icons/fa';

export const ProjectsContainer = (props: any) => {
  if (!props.title || !props.description || !props.image) {
    throw new Error('Component Must Have Title, Description, Image');
  }

  let propLinks: any = getResources(props);

  for (let i = 0; i < propLinks.length; i++) {
    if (propLinks[i] === '') {
      propLinks.splice(i, 1);
    }
  }

  return (
    <div className='max-w-xs'>
      <div className='bg-blue-700 p-4 lg:px-6 lg:pt-6 lg:pb-4 rounded-t-3xl flex justify-between'>
        <div className=''>
          <img
            src={props.image}
            alt={`${props.title} Image`}
            className={`h-16 w-auto min-w-fit rounded-3xl ${
              props.invert ? 'invert' : ''
            }`}
          />
        </div>
        <div className='text-lg max-w-xss sm:max-w-none sm:text-2xl align-center h-full my-auto text-right'>
          {props.title}
        </div>
      </div>
      <div className='bg-black px-8 pt-8 pb-4 rounded-b-3xl min-h-52 shadow-2xl shadow-black'>
        <div className='text-white min-h-20'>{props.description}</div>
        <div className='w-5/6'>
          <div className='grid grid-cols-2 gap-x-6'>
            {propLinks.map((link: any, index: number) => {
              return (
                <div key={index} className='mt-1'>
                  {link}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const getResources = (props: any) => {
  let links: any = [];

  const github = props.github ? (
    <a href={props.github} className='flex hover:opacity-70'>
      <FaGithub className='translate-y-1 mr-2 hidden xs:block' /> Github
    </a>
  ) : (
    ''
  );

  const website = props.website ? (
    <a href={props.website} className='flex hover:opacity-70'>
      <FaGlobe className='translate-y-1 mr-2 hidden xs:block' /> Website
    </a>
  ) : (
    ''
  );

  const discord = props.discord ? (
    <a href={props.discord} className='flex hover:opacity-70'>
      <FaDiscord className='translate-y-1 mr-2 hidden xs:block' /> Discord
    </a>
  ) : (
    ''
  );

  const youtube = props.youtube ? (
    <a href={props.youtube} className='flex hover:opacity-70'>
      <FaYoutube className='translate-y-1 mr-2 hidden xs:block' /> Youtube
    </a>
  ) : (
    ''
  );

  const botInvite = props.botInvite ? (
    <a href={props.botInvite} className='flex hover:opacity-70'>
      <FaRobot className='translate-y-1 mr-2 hidden xs:block' /> Bot Invite
    </a>
  ) : (
    ''
  );

  links.push(github);
  links.push(website);
  links.push(discord);
  links.push(youtube);
  links.push(botInvite);

  for (let i = 0; i < links.length; i++) {
    if (links[i] === '') {
      links.splice(i, 1);
    }
  }

  return links;
};
