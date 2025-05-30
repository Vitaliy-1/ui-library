<template>
	<div class="border border-light" data-cy="participant-manager">
		<div class="flex items-center justify-between bg-default p-5">
			<h3 class="text-2xl-bold uppercase text-heading">
				{{ t('editor.submission.stageParticipants') }}
			</h3>
			<div class="flex gap-x-2">
				<component
					:is="Components[action.component] || action.component"
					v-bind="action.props || {}"
					v-for="(action, i) in participantManagerStore.topItems"
					:key="i"
				></component>
			</div>
		</div>
		<ul
			v-if="participantManagerStore.participantsList?.length"
			class="flex flex-col"
			role="list"
		>
			<li
				v-if="participantManagerStore.isUserLoggedInAs"
				class="border-t border-light p-4 text-base-normal even:bg-tertiary"
			>
				<PkpButton
					:is-link="true"
					:is-warnable="true"
					@click="participantManagerStore.participantLogoutAs()"
				>
					{{
						t('user.logOutAs', {
							username: participantManagerStore.currentUserFullName,
						})
					}}
				</PkpButton>
			</li>
			<li
				v-for="participant in participantManagerStore.participantsList"
				:key="participant.id"
				class="border-t border-light p-4 text-base-normal even:bg-tertiary"
			>
				<div class="flex items-center justify-between">
					<div class="flex w-full min-w-0 flex-1">
						<div>
							<UserAvatar
								:user-id="participant.id"
								:initials="participant.displayInitials"
							></UserAvatar>
						</div>
						<div class="ms-2 flex min-w-0 flex-1 flex-col justify-center">
							<component
								:is="Components[action.component] || action.component"
								v-for="(action, i) in participantManagerStore.getItemInfoItems({
									participant,
								})"
								v-bind="action.props || {}"
								:key="i"
								:participant="participant"
							></component>
						</div>
					</div>
					<div class="ms-2">
						<DropdownActions
							:actions="participantManagerStore.getItemActions({participant})"
							:label="`${participant.fullName} ${t('common.moreActions')}`"
							button-variant="ellipsis"
							@action="
								(actionName) =>
									participantManagerStore[actionName]({
										participant: participant,
									})
							"
						/>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
import UserAvatar from '@/components/UserAvatar/UserAvatar.vue';
import {useLocalize} from '@/composables/useLocalize';
import {useParticipantManagerStore} from './participantManagerStore';
import PkpButton from '@/components/Button/Button.vue';
import DropdownActions from '@/components/DropdownActions/DropdownActions.vue';
import ParticipantManagerActionButton from './ParticipantManagerActionButton.vue';
import ParticipantManagerItemInfoName from './ParticipantManagerItemInfoName.vue';
import ParticipantManagerItemInfoRole from './ParticipantManagerItemInfoRole.vue';
import ParticipantManagerItemInfoRecommendOnly from './ParticipantManagerItemInfoRecommendOnly.vue';

const props = defineProps({
	submission: {type: Object, required: true},
	submissionStageId: {type: Number, required: true},
});

const Components = {
	ParticipantManagerActionButton,
	ParticipantManagerItemInfoName,
	ParticipantManagerItemInfoRole,
	ParticipantManagerItemInfoRecommendOnly,
};

const participantManagerStore = useParticipantManagerStore(props);

const {t} = useLocalize();
</script>
