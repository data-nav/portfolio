import ProfileCard from '../ProfileCard';
import profileImg from '@assets/generated_images/Professional_portfolio_headshot_7534f525.png';

export default function ProfileCardExample() {
  return (
    <div className="bg-sidebar w-80">
      <ProfileCard
        name="Navkaran Singh"
        title="Data Analyst & Engineer"
        imageSrc={profileImg}
        email="navkarancad@gmail.com"
        phone="+1 (514) 804-1045"
        location="Montréal, Canada"
        githubUrl="https://github.com/data-nav"
        linkedinUrl="https://www.linkedin.com/in/nav-fr/"
        tableauUrl="https://public.tableau.com/app/profile/navkaran.singh6648/vizzes"
      />
    </div>
  );
}
