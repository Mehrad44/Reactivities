using System;
using Application.Activities.Command;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator(Func<EditActivity.Command, EditActivityDto> selector) : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.Id)
            .NotEmpty().WithMessage("Id is required");

        
    }
}
