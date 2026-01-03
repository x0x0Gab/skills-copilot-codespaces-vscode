function skillsMember()  {
    return {
        restrict: 'E',
        templateUrl: 'app/components/skills/skills-member/skills-member.html',
        scope: {
            member: '='
        },
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true
    };
}
