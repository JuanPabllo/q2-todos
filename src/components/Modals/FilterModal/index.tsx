import { Button, Center, HStack, Modal, Text } from 'native-base';
import { FilterModalProps } from './types';

export const FilterModal = ({
  showModal = false,
  setShowModal,
  finish,
  setFinish,
  setTag,
  tag,
}: FilterModalProps) => {
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton
            onPress={() => {
              setFinish(undefined);
              setTag(undefined);
              setShowModal(false);
            }}
          />
          <Modal.Header>Filtro</Modal.Header>
          <Modal.Body>
            <Text>Filtre por empresa:</Text>
            <HStack marginTop={2} justifyContent="space-between">
              <Button
                variant="outline"
                colorScheme={tag === 'Q2BANK' ? 'dark' : 'primary'}
                bgColor={tag === 'Q2BANK' ? '#006AFF' : '#fff'}
                size="xs"
                onPress={() => setTag('Q2BANK')}
              >
                Q2BANK
              </Button>
              <Button
                variant="outline"
                colorScheme={tag === 'Q2PAY' ? 'dark' : 'primary'}
                bgColor={tag === 'Q2PAY' ? '#006AFF' : '#fff'}
                size="xs"
                onPress={() => setTag('Q2PAY')}
              >
                Q2PAY
              </Button>
              <Button
                variant="outline"
                colorScheme={tag === 'Q2INGRESSOS' ? 'dark' : 'primary'}
                bgColor={tag === 'Q2INGRESSOS' ? '#006AFF' : '#fff'}
                size="xs"
                onPress={() => setTag('Q2INGRESSOS')}
              >
                Q2INGRESSOS
              </Button>
            </HStack>
            <Text marginTop={4}>Filtre por status da tarefa:</Text>
            <HStack marginTop={2} justifyContent="flex-start">
              <Button
                variant="outline"
                marginRight={4}
                colorScheme={finish === 'Finalizada' ? 'dark' : 'primary'}
                bgColor={finish === 'Finalizada' ? '#006AFF' : '#fff'}
                size="xs"
                onPress={() => setFinish('Finalizada')}
              >
                Finalizada
              </Button>
              <Button
                variant="outline"
                colorScheme={finish === 'Pendente' ? 'dark' : 'primary'}
                bgColor={finish === 'Pendente' ? '#006AFF' : '#fff'}
                size="xs"
                onPress={() => setFinish('Pendente')}
              >
                Pendente
              </Button>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="outline"
                colorScheme="blue"
                onPress={() => {
                  setFinish(undefined);
                  setTag(undefined);
                  setShowModal(false);
                }}
              >
                Fechar
              </Button>
              <Button
                variant="outline"
                bgColor="#006AFF"
                colorScheme="dark"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Filtrar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
